<template>
    <div>
        <div class="body">
            <div class="menu">
                <div class="section">

                </div>
            </div>
            <div class="subSection">
                        <clock class="timer"></clock>
                </div>
            <div class="container"></div>
            <div class="footer">
                <div class="section">

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>


.body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--space-cadet);
    
    div {
        width: 65vw;
        min-height: 100px;
    }

    .menu {
        border-bottom: 2px solid var(--isabelline);
    }

    .subSection {
        border-left: 2px solid var(--isabelline);
        border-right: 2px solid var(--isabelline);

        width: inherit;
        display: flex;
        justify-content: center;

        .timer {
            display: flex;
            justify-content: end;

            color: var(--isabelline);
            
    
        }
    }
    .container {
        height: calc(100vh - 200px);
        border-left: 2px solid var(--isabelline);
        border-right: 2px solid var(--isabelline);
    }

    .footer {
        border-top: 2px solid var(--isabelline);
    }

    .menu, .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 100vw;

        .section {
            border-left: 2px solid var(--isabelline);
            border-right: 2px solid var(--isabelline);

        }

    }
}


</style>